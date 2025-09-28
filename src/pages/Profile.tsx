import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

const Profile = () => {
  const orderHistory = [
    { id: "#12345", status: "In Progress" },
    { id: "#12344", status: "Delivered" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Profile</h1>
        
        {/* Profile Info */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <div>
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p className="text-gray-600">johndoe@example.com</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Order History */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Order History</h2>
          <div className="space-y-3">
            {orderHistory.map((order) => (
              <Card key={order.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Order {order.id}</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      order.status === "In Progress" 
                        ? "bg-blue-100 text-blue-800" 
                        : "bg-green-100 text-green-800"
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Settings */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Settings</h2>
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Notifications</h3>
                  <p className="text-sm text-gray-600">Receive push notifications</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Preferences</h3>
                  <p className="text-sm text-gray-600">Customize your experience</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Profile;