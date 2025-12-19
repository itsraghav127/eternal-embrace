import { motion } from "framer-motion";
import { Shield, Settings, Users, BarChart3, Bell, LogOut } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AdminPage = () => {
  const adminName = "Raghav";

  const stats = [
    { label: "Total Views", value: "2,847", icon: BarChart3, color: "text-rose" },
    { label: "Gallery Photos", value: "12", icon: Users, color: "text-blush" },
    { label: "Love Messages", value: "7", icon: Bell, color: "text-rose-light" },
  ];

  const quickActions = [
    { label: "Manage Gallery", icon: Settings },
    { label: "Edit Content", icon: Settings },
    { label: "View Analytics", icon: BarChart3 },
  ];

  return (
    <PageLayout>
      <section className="min-h-screen py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Admin Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-rose/20 border border-rose/30 mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Shield className="w-6 h-6 text-rose" />
              <span className="text-rose font-medium">Admin Dashboard</span>
            </motion.div>

            <h1 className="font-display text-5xl md:text-7xl text-foreground mb-4 glow-text">
              Welcome, {adminName}
            </h1>
            <p className="text-foreground/60 font-body text-lg max-w-2xl mx-auto">
              Manage your romantic journey with love and care
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                <Card className="glass-card border-rose/20 hover:border-rose/40 transition-all duration-300">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="p-3 rounded-full bg-rose/20">
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-3xl font-display text-foreground">{stat.value}</p>
                      <p className="text-foreground/60 font-body text-sm">{stat.label}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Admin Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="glass-card border-rose/20 mb-12">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-foreground flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose to-blush flex items-center justify-center">
                    <span className="text-white font-bold text-xl">R</span>
                  </div>
                  Admin Profile
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-midnight-light/50 border border-rose/10">
                    <p className="text-foreground/60 text-sm mb-1">Name</p>
                    <p className="text-foreground font-medium">{adminName}</p>
                  </div>
                  <div className="p-4 rounded-lg bg-midnight-light/50 border border-rose/10">
                    <p className="text-foreground/60 text-sm mb-1">Role</p>
                    <p className="text-foreground font-medium">Super Admin</p>
                  </div>
                  <div className="p-4 rounded-lg bg-midnight-light/50 border border-rose/10">
                    <p className="text-foreground/60 text-sm mb-1">Status</p>
                    <p className="text-green-400 font-medium flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      Active
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-midnight-light/50 border border-rose/10">
                    <p className="text-foreground/60 text-sm mb-1">Last Login</p>
                    <p className="text-foreground font-medium">Just now</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="font-display text-2xl text-foreground mb-6">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.label}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    variant="outline"
                    className="w-full h-auto py-6 border-rose/20 hover:border-rose/40 hover:bg-rose/10 transition-all duration-300"
                  >
                    <action.icon className="w-5 h-5 mr-3 text-rose" />
                    <span className="text-foreground">{action.label}</span>
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default AdminPage;
