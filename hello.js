import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Download, ArrowLeft, Package } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import useLocalStorage from "../hooks/useLocalStorage";
import Toast from "../components/Toast";
import appsData from "../data/apps.json";

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [installedApps, setInstalledApps] = useLocalStorage(
    "installedApps",
    []
  );

  useEffect(() => {
    const foundApp = appsData.find((a) => a.id === parseInt(id));
    setApp(foundApp);

    if (foundApp) {
      const isInstalled = installedApps.some((a) => a.id === foundApp.id);
      setInstalled(isInstalled);
    }
  }, [id, installedApps]);

  const handleInstall = () => {
    setInstalledApps([...installedApps, app]);
    setInstalled(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  if (!app) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Package className="w-16 h-16 mx-auto mb-4 text-error" />
          <h2 className="text-2xl font-bold mb-2">OPPS!! APP NOT FOUND</h2>
          <p className="text-base-content/70 mb-4">
            The app you're looking for doesn't exist
          </p>
          <Link to="/apps" className="btn btn-primary">
            Back to Apps
          </Link>
        </div>
      </div>
    );
  }

  const chartData = app.ratings.map((rating) => ({
    name: rating.name,
    count: rating.count,
  }));

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/apps" className="btn btn-ghost mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Apps
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* App Image and Basic Info */}
          <div className="lg:col-span-1">
            <div className="card bg-base-100 shadow-xl">
              <figure className="h-64">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-2xl">{app.title}</h2>
                <p className="text-base-content/70">{app.companyName}</p>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-semibold">{app.ratingAvg}</span>
                    <span className="text-sm text-base-content/70">
                      ({app.reviews})
                    </span>
                  </div>

                  <div className="flex items-center space-x-1">
                    <Download className="w-5 h-5 text-primary" />
                    <span>{app.downloads.toLocaleString()}</span>
                  </div>
                </div>

                <div className="card-actions justify-end mt-6">
                  <button
                    className={`btn btn-primary ${
                      installed ? "btn-disabled" : ""
                    }`}
                    onClick={handleInstall}
                    disabled={installed}
                  >
                    {installed ? "Installed" : "Install"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* App Details and Chart */}
          <div className="lg:col-span-2 space-y-8">
            {/* Review Chart */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl mb-4">App Reviews</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* App Description */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="card-title text-xl mb-4">About This App</h3>
                <p className="text-base-content/80 leading-relaxed">
                  {app.description}
                </p>

                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Additional Information</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-base-content/70">Size:</span>
                      <span className="ml-2 font-semibold">{app.size} MB</span>
                    </div>
                    <div>
                      <span className="text-base-content/70">Reviews:</span>
                      <span className="ml-2 font-semibold">{app.reviews}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <Toast message="App installed successfully!" type="success" />
      )}
    </div>
  );
};

export default AppDetails;
