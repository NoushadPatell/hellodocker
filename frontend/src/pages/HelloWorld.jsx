import React, { useState, useEffect } from 'react';

const HelloWorldApp = () => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:8081/api/hello');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.text();
        setMessage(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessage();
  }, []);

  const handleRefresh = () => {
    setError(null);
    fetchMessage();
  };

  const fetchMessage = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/hello`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.text();
      setMessage(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 text-center">
          {/* Header */}
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
              <span className="text-3xl">🚀</span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-2">Spring Boot API</h1>
            <p className="text-white/70">Connected to localhost:8081</p>
          </div>

          {/* Message Display */}
          <div className="mb-8">
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            ) : error ? (
              <div className="text-red-300 space-y-2">
                <div className="text-4xl mb-2">⚠️</div>
                <p className="text-lg font-semibold">Connection Error</p>
                <p className="text-sm opacity-80">{error}</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-6xl mb-4">👋</div>
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  <h2 className="text-2xl font-bold">{message}</h2>
                </div>
                <div className="text-white/60 text-sm">
                  Message received from Spring Boot API
                </div>
              </div>
            )}
          </div>

          {/* Action Button */}
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {loading ? 'Connecting...' : 'Refresh Message'}
          </button>

          {/* Status Indicator */}
          <div className="mt-6 flex items-center justify-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${error ? 'bg-red-500' : 'bg-green-500'} animate-pulse`}></div>
            <span className="text-white/60 text-xs">
              {error ? 'Disconnected' : 'Connected'}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-white/40 text-sm">
          <p>React + Spring Boot Integration</p>
        </div>
      </div>
    </div>
  );
};

export default HelloWorldApp;
