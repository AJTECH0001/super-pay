import { useState } from 'react';

function SuperPay() {
  const [account, setAccount] = useState(null);
  const [receiverAddress, setReceiverAddress] = useState('');
  const [flowRate, setFlowRate] = useState('');
  const [message, setMessage] = useState('');

  const connectWallet = () => {
    // Simulate wallet connection logic
    setAccount('0xYourWalletAddress'); // Replace with actual wallet connection
  };

  const startStream = () => {
    // Call Superfluid function to start stream (you'd integrate this with Superfluid SDK)
    setMessage(`Streaming to ${receiverAddress} at a flow rate of ${flowRate} tokens/second.`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold text-center mb-6">Superfluid Subscription Demo</h1>
      
      {!account ? (
        <button
          onClick={connectWallet}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md font-bold transition duration-200"
        >
          Connect Wallet
        </button>
      ) : (
        <p className="text-center text-green-500 font-semibold">Connected: {account}</p>
      )}
      
      <div className="mt-6">
        <input
          placeholder="Receiver Address"
          value={receiverAddress}
          onChange={(e) => setReceiverAddress(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md mb-4"
        />
        <input
          placeholder="Flow Rate (tokens/second)"
          value={flowRate}
          onChange={(e) => setFlowRate(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-md mb-4"
        />
        <button
          onClick={startStream}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-bold transition duration-200"
        >
          Start Stream
        </button>
      </div>

      {message && (
        <p className="mt-6 text-center text-gray-700">{message}</p>
      )}
    </div>
  );
}

export default SuperPay;
