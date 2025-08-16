import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, User, Users, Crown, Settings } from "lucide-react";

const DefaultLogins = () => {
  const defaultAccounts = [
    {
      role: "Admin",
      icon: <Settings className="h-6 w-6" />,
      email: "admin@gatimbilibrary.ke",
      password: "Admin123!",
      description: "Full system control, user management, audit logs, system settings",
      color: "bg-red-500"
    },
    {
      role: "Chief Librarian", 
      icon: <Crown className="h-6 w-6" />,
      email: "chief@gatimbilibrary.ke",
      password: "Chief123!",
      description: "All librarian features + book management, grace period settings",
      color: "bg-purple-500"
    },
    {
      role: "Librarian",
      icon: <Shield className="h-6 w-6" />,
      email: "librarian@gatimbilibrary.ke", 
      password: "Librarian123!",
      description: "Register users, manage reservations, issue books, set fines",
      color: "bg-blue-500"
    },
    {
      role: "Adult Member",
      icon: <User className="h-6 w-6" />,
      email: "adult@gatimbilibrary.ke",
      password: "Adult123!",
      description: "Access adult books, view borrowing history, manage profile",
      color: "bg-green-500"
    },
    {
      role: "Junior Member",
      icon: <Users className="h-6 w-6" />,
      email: "junior@gatimbilibrary.ke",
      password: "Junior123!",
      description: "Access junior books, view borrowing history",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <main className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">System Default Logins</h1>
            <p className="text-xl text-muted-foreground">
              Use these credentials to test different user roles in the system
            </p>
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>⚠️ Important:</strong> These are default test accounts. 
                In production, users should change these passwords immediately after first login.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            {defaultAccounts.map((account, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`${account.color} text-white p-2 rounded-lg`}>
                        {account.icon}
                      </div>
                      <CardTitle className="text-xl">{account.role}</CardTitle>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Default Account
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Email</h4>
                      <p className="text-sm font-mono bg-muted/50 p-2 rounded">
                        {account.email}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Password</h4>
                      <p className="text-sm font-mono bg-muted/50 p-2 rounded">
                        {account.password}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm mb-1">Permissions</h4>
                      <p className="text-xs text-muted-foreground">
                        {account.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle>User Registration Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold">1. Admin Registration</h4>
                  <p className="text-muted-foreground">Admin registers all users and assigns temporary passwords</p>
                </div>
                <div>
                  <h4 className="font-semibold">2. Chief Librarian & Librarian Registration</h4>
                  <p className="text-muted-foreground">Admin or Chief Librarian can register other staff members</p>
                </div>
                <div>
                  <h4 className="font-semibold">3. Member Registration</h4>
                  <p className="text-muted-foreground">Librarians register adult and junior members</p>
                </div>
                <div>
                  <h4 className="font-semibold">4. Password Update</h4>
                  <p className="text-muted-foreground">All users must change their password on first login</p>
                </div>
                <div>
                  <h4 className="font-semibold">5. Age-Based Upgrade</h4>
                  <p className="text-muted-foreground">System automatically detects when junior members turn 18 and prompts profile upgrade to adult</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLogins;