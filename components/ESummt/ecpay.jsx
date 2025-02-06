import React, { useState , useEffect} from "react";
import { QRCode } from "react-qrcode-logo";
import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const PaymentPortal = ({ title, price, logoLink, userID, accommodation, isOpen }) => {
  // State variables
  const [transactionId, setTransactionId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [showCouponInput, setShowCouponInput] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [couponMessage, setCouponMessage] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(price);

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // Function to generate the QR code link
   const generateQRCodeLink = (amount) => {
    const upiID = title === "BOOTCAMP +  ESUMMIT"
      ? "jaindevansh05@okaxis" 
      : "avantikanair204@okhdfcbank";
    return `upi://pay?pa=${upiID}&pn=E-Cell, IIT Hyderabad&am=${amount}&cu=INR&tn=E-Summit2025-${userID}`;
  };
  // State to hold the QR code link
  const [qrCodeLink, setQrCodeLink] = useState(generateQRCodeLink(discountedPrice));

  useEffect(() => {
    if (isOpen) {
      // Reset all state variables to their initial values
      setTransactionId("");
      setIsSubmitting(false);
      setResponseMessage("");
      setShowCouponInput(false);
      setCouponCode("");
      setIsCouponApplied(false);
      setCouponMessage("");
      setDiscountedPrice(price);
      setQrCodeLink(generateQRCodeLink(price));
    }
  }, [isOpen, price]);

  // Handle transaction ID submission
  const handleSubmit = async () => {
    if (!transactionId) {
      setResponseMessage("Please enter a transaction ID.");
      return;
    }
    setIsSubmitting(true);
    setResponseMessage(""); // Clear previous messages

    let finalPrice = discountedPrice;

    // For free tickets, set price to -1 and transaction ID to a placeholder
    if (price === 0 || price == -1) {
      finalPrice = -1;
      setTransactionId("x0443245");
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/transactionID`,
        {
          txn_id: transactionId,
          amount: Number(finalPrice),
          title: title + (accommodation ? " with Accommodation" : ""),
          isAccommodation: accommodation,
          couponCode: isCouponApplied ? couponCode : "",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.message) {
        toast.success("Transaction ID submitted successfully!", {
          autoClose: 3000,
        });
        setTimeout(() => {
          window.location.href = "/esummit";
        }, 2000);
      }
    } catch (error) {
      setResponseMessage("Error submitting transaction ID. Please try again.");
      toast.error(`Error: ${error.response?.data?.error || "Unknown error occurred"}`, {
        autoClose: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle coupon code application
  const handleApplyCoupon = async () => {
    if (!couponCode) {
      setCouponMessage("Please enter a coupon code.");
      return;
    }
    setCouponMessage(""); // Clear previous messages

    try {
      const response = await axios.post(
        `${BASE_URL}/applyCoupon`,
        {
          couponCode: couponCode,
          originalPrice: Number(price),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const { newPrice, message } = response.data;
        setDiscountedPrice(newPrice);
        setIsCouponApplied(true);
        setCouponMessage(message || "Coupon applied successfully!");
        toast.success(message || "Coupon applied successfully!", {
          autoClose: 3000,
        });

        // Update the QR code link with the new price
        setQrCodeLink(generateQRCodeLink(newPrice));
      } else {
        const errorMsg = response.data.error || "Invalid coupon code.";
        setCouponMessage(errorMsg);
        toast.error(errorMsg, { autoClose: 3000 });
      }
    } catch (error) {
      const errorMsg = error.response?.data?.error || "Unknown error occurred";
      setCouponMessage(`Error: ${errorMsg}`);
      toast.error(`Error: ${errorMsg}`, { autoClose: 3000 });
    }
  };

  // Helper function to format price display
  const formatPriceDisplay = (priceValue) => {
    if (priceValue === " ̶1̶9̶9̶ Free") {
      return "Free";
    }
    return `₹${priceValue < 0 ? 0 : priceValue}`;
  };

  return (
    <div
      style={{
        display: isOpen?  "flex" : "none",
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
          <strong>Ticket:</strong> {title + (accommodation ? " with Accommodation" : "")}
        </p>
        <p style={{ margin: "0", fontSize: "1rem" }}>
          <strong>Price:</strong> {formatPriceDisplay(discountedPrice)}
        </p>
      </div>

      {/* Coupon Code Section */}
      <div
        style={{
          marginTop: "20px",
          width: "100%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        {!isCouponApplied ? (
          <>
            {!showCouponInput ? (
              <p>
                Do you have a coupon code?{" "}
                <span
                  onClick={() => setShowCouponInput(true)}
                  style={{ color: "#007bff", cursor: "pointer", textDecoration: "underline" }}
                >
                  Click here
                </span>
              </p>
            ) : (
              <div style={{ marginTop: "10px" }}>
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter Coupon Code"
                  style={{
                    width: "70%",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    marginBottom: "10px",
                    marginRight: "5px",
                  }}
                />
                <button
                  onClick={handleApplyCoupon}
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#28a745",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Apply
                </button>
                {couponMessage && (
                  <p
                    style={{
                      marginTop: "10px",
                      color: couponMessage.includes("Error") ? "red" : "green",
                    }}
                  >
                    {couponMessage}
                  </p>
                )}
              </div>
            )}
          </>
        ) : (
          <p style={{ color: "green" }}>{couponMessage}</p>
        )}
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
        {price === 0 || price == -1 && (
          <span style={{ textAlign: "center" }}>
            Enter any key in Transaction ID and submit
          </span>
        )}
        <input
          type="text"
          value={transactionId}
          onChange={(e) =>
            price === 0 || price == -1
              ? setTransactionId("0xxx42345")
              : setTransactionId(e.target.value)
          }
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
        <span style={{ textAlign: "center" }}>
          Pay by any UPI App, preferably Google Pay  and enter your Transaction ID. 
          <b>If the Transaction ID provided by your UPI app is contains any english alphabets, then please submit the UTR or transation Id from your bank statement.</b>
           After successful payment, you will
          receive a confirmation email.
        </span>
        <br />
        <span style={{ textAlign: "center", color: "gray" }}>
          Powered by Web Team, ECell IITH
        </span>
      </div>
    </div>
  );
};

export default PaymentPortal;