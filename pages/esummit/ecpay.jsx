import React, { useState } from "react";
import { QRCode } from "react-qrcode-logo";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const PaymentPortal = ({ title, price, logoLink }) => {
  const [transactionId, setTransactionId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Construct the QR code link dynamically using the price value
  const qrCodeLink = `upi://pay?pa=bhaskaraa45@ybl&pn=Bhaskar&am=${price}&cu=INR&tn=E-Summit2025`;

  // Handle transaction ID submission
  const handleSubmit = async () => {
    if (!transactionId) {
      setResponseMessage("Please enter a transaction ID.");
      return;
    }
    setIsSubmitting(true);
    setResponseMessage(""); // Clear previous messages

    if (price === " ̶1̶9̶9̶ Free"){
        price = 0;
        setTransactionId("x0443245");
    }

    if (price === "399"){
        price = 399;
    }

    try {
      const response = await axios.post(BASE_URL+"/transactionID ", {
        txn_id: transactionId,
        amount: price,
      });
      setResponseMessage(response.data.message || "Transaction ID submitted successfully!");
    } catch (error) {
      setResponseMessage("Error submitting transaction ID. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#fff",
        fontFamily: "josefin, sans-serif",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          textAlign: "center",
          padding: "10px",
          color: "#333",
          fontSize: "1.9rem",
          fontWeight: "600",
        }}
      >
        <span style={{ color: "blue" }}>Summit</span>
        <span style={{ color: "orange" }}>PAY</span>
      </div>

      {/* QR Code Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <QRCode
          value={qrCodeLink}
          size={150}
          logoImage={logoLink || "/esummit25/qrlogo1.png"}
          logoWidth={50}
          logoHeight={50}
          qrStyle="dots"
        />
        <span>Pay by UPI</span>
      </div>

      {/* Ticket Info Section */}
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h2 style={{ margin: "0 0 10px 0", fontSize: "1.5rem" }}>ESummit 2025 IITH</h2>
        <p style={{ margin: "0 0 5px 0", fontSize: "1rem" }}>
          <strong>Ticket:</strong> {title}
        </p>
        <p style={{ margin: "0", fontSize: "1rem" }}>
          <strong>Price:</strong> ₹{price}
        </p>
      </div>

      {/* Transaction ID Section */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        {price===" ̶1̶9̶9̶ Free" && <span style={{textAlign:"center"}}>Enter any key in Transaction ID and submit</span>}
        <input
          type="text"
          value={transactionId}
          onChange={(e) => {price===" ̶1̶9̶9̶ Free"?setTransactionId("0xxx42345"):setTransactionId(e.target.value)}}
          placeholder="Enter Transaction ID"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            marginBottom: "10px",
          }}
        />
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: isSubmitting ? "not-allowed" : "pointer",
          }}
        >
          {isSubmitting ? "Submitting..." : "Submit Transaction"}
        </button>
        {responseMessage && (
          <p
            style={{
              marginTop: "10px",
              color: responseMessage.includes("Error") ? "red" : "green",
            }}
          >
            {responseMessage}
          </p>
        )}
        <br />
        <span style={{textAlign:"center"}}>Pay by any UPI App and Enter your Transaction ID. After Successful Payment, you will receive a Confirmation Mail.</span>
        <br />
        <span style={{textAlign:"center", color:"gray"}}>Powered by Web Team, ECell IITH</span>
      </div>
    </div>
  );
};

export default PaymentPortal;
