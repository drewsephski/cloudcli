"use client"

import { useEffect, useState } from "react"
import { useAuth, UserProfile } from "@/lib/auth-context"
import { db } from "@/lib/firebase"
import { collection, getDocs, doc, updateDoc } from "firebase/firestore"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShieldAlert, Loader2, UserCog } from "lucide-react"

export default function AdminPage() {
  const { profile } = useAuth()
  const [users, setUsers] = useState<UserProfile[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (profile?.role === "admin") {
      fetchUsers()
    }
  }, [profile])

  const fetchUsers = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"))
      const usersData: UserProfile[] = []
      querySnapshot.forEach((doc) => {
        usersData.push(doc.data() as UserProfile)
      })
      setUsers(usersData)
    } catch (error) {
      console.error("Error fetching users:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleRoleChange = async (userId: string, newRole: "admin" | "member") => {
    try {
      await updateDoc(doc(db, "users", userId), { role: newRole })
      setUsers(users.map(u => u.uid === userId ? { ...u, role: newRole } : u))
    } catch (error) {
      console.error("Error updating role:", error)
    }
  }

  if (profile?.role !== "admin") {
    return (
      <div className="flex h-[50vh] flex-col items-center justify-center space-y-4 text-center">
        <ShieldAlert className="h-12 w-12 text-destructive" />
        <h1 className="text-2xl font-bold">Access Denied</h1>
        <p className="text-muted-foreground">You do not have permission to view this page.</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Panel</h1>
        <p className="text-muted-foreground">Manage users and system settings.</p>
      </div>

      <Card className="border-border/50 bg-card/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <UserCog className="h-5 w-5" /> User Management
          </CardTitle>
          <CardDescription>View and manage all registered users.</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="flex justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="rounded-md border border-border/50">
              <div className="grid grid-cols-4 border-b border-border/50 bg-muted/50 p-4 text-sm font-medium">
                <div>Email</div>
                <div>Name</div>
                <div>Role</div>
                <div>Actions</div>
              </div>
              <div className="divide-y divide-border/50">
                {users.map((user) => (
                  <div key={user.uid} className="grid grid-cols-4 items-center p-4 text-sm">
                    <div className="truncate pr-4">{user.email}</div>
                    <div className="truncate pr-4">{user.name || "N/A"}</div>
                    <div>
                      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        user.role === "admin" ? "bg-primary/10 text-primary" : "bg-secondary text-secondary-foreground"
                      }`}>
                        {user.role}
                      </span>
                    </div>
                    <div>
                      <select
                        value={user.role}
                        onChange={(e) => handleRoleChange(user.uid, e.target.value as "admin" | "member")}
                        disabled={user.uid === profile.uid} // Prevent removing own admin access
                        className="h-8 rounded-md border border-input bg-background px-2 py-1 text-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="member">Member</option>
                        <option value="admin">Admin</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
