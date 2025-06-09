import React, { useEffect, useState } from "react";
import axios from "axios";
import skipImage from "./assets/skip.png";
import logoIcon from "./assets/logo_icon.png";

// Accessible Progress Step
function Step({ done, active, icon, label }) {
  return (
    <div
      aria-current={active ? "step" : undefined}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: 70,
      }}
    >
      <span
        style={{
          fontSize: 32,
          opacity: done ? 1 : active ? 0.9 : 0.45,
          marginBottom: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: active
            ? "linear-gradient(90deg,#eaf1fe 60%,#dbeafe 100%)"
            : "none",
          borderRadius: "50%",
          width: 40,
          height: 40,
        }}
      >
        {icon}
      </span>
      <span
        style={{
          fontWeight: active ? 700 : 500,
          color: active ? "#2563eb" : done ? "#7ca7e6" : "#b5c8ea",
          fontSize: "1.08rem",
          marginTop: 2,
          letterSpacing: 0.1,
          textAlign: "center",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function StepLine() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: 38,
        borderTop: "2.5px solid #bed1ed",
        margin: "0 5px",
      }}
    />
  );
}

// Skip Card Component
function SkipCard({ skip, selected, onSelect }) {
  return (
    <div
      tabIndex={0}
      role="button"
      aria-pressed={selected}
      aria-label={`Select ${skip.size} yard skip`}
      onClick={onSelect}
      onKeyDown={e => {
        if (e.key === "Enter" || e.key === " ") onSelect();
      }}
      style={{
        background: "#fff",
        borderRadius: "20px",
        boxShadow: selected
          ? "0 4px 32px rgba(65, 105, 225, 0.13)"
          : "0 2px 14px rgba(50,70,120,0.07)",
        border: selected
          ? "2.5px solid #2563eb"
          : "2px solid #e5eaf7",
        padding: "30px 22px 28px 22px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        cursor: "pointer",
        transition: "box-shadow 0.18s, border 0.15s",
        position: "relative",
        minHeight: 400,
        outline: selected ? "2px solid #2563eb" : "none",
        boxSizing: "border-box",
      }}
    >
      {/* IMAGE and BADGE */}
      <div
        style={{
          width: "100%",
          position: "relative",
          marginBottom: 22,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={skipImage}
          alt={`${skip.size} yard skip`}
          style={{
            width: "100%",
            maxWidth: 320,
            height: 140,
            objectFit: "cover",
            borderRadius: "12px",
            background: "#f4f5f7",
            boxShadow: selected
              ? "0 2px 16px #2563eb22"
              : "0 1px 6px #b5c8ea22",
            transition: "box-shadow 0.18s",
          }}
        />
        {/* Badge top right */}
        <div
          style={{
            position: "absolute",
            top: 13,
            right: 16,
            background: selected ? "#2563eb" : "#4687ee",
            color: "#fff",
            fontWeight: 700,
            borderRadius: "18px",
            fontSize: "1.05rem",
            padding: "6px 17px 6px 17px",
            boxShadow: "0 1.5px 8px rgba(70,120,210,0.17)",
            border: "none",
            letterSpacing: 0.1,
            transition: "background 0.18s",
          }}
        >
          {skip.size} Yards
        </div>
      </div>
      {/* TITLE */}
      <div
        style={{
          fontWeight: 700,
          fontSize: "1.20rem",
          margin: "7px 0 3px 0",
          color: "#25305a",
        }}
      >
        {skip.size} Yard Skip
      </div>
      {/* HIRE PERIOD */}
      <div
        style={{
          color: "#7a90b7",
          fontSize: "1rem",
          marginBottom: 9,
        }}
      >
        {skip.hire_period_days} day hire period
      </div>
      {/* PRICE */}
      <div
        style={{
          color: skip.price_inc_vat ? "#176d2d" : "#8796b6",
          fontSize: "1.23rem",
          fontWeight: 700,
          marginBottom: 18,
        }}
      >
        {skip.price_inc_vat
          ? `£${Number(skip.price_inc_vat).toLocaleString()}`
          : "Contact for price"}
      </div>
      {/* BUTTON */}
      <button
        type="button"
        disabled={selected}
        style={{
          background: selected
            ? "linear-gradient(90deg,#2563eb 60%,#1d57de 100%)"
            : "linear-gradient(90deg,#6fa6fc 60%,#4584ef 100%)",
          color: "#fff",
          padding: "12px 30px",
          border: "none",
          borderRadius: "10px",
          fontWeight: 700,
          fontSize: "1.09rem",
          boxShadow: "0 2px 9px rgba(80,120,220,0.07)",
          cursor: selected ? "not-allowed" : "pointer",
          marginTop: 6,
          outline: "none",
          opacity: selected ? 0.7 : 1,
          transition: "background 0.13s, opacity 0.13s",
        }}
      >
        {selected ? "Selected" : "Select"}
      </button>
    </div>
  );
}

export default function SkipSelector() {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
      )
      .then((res) => {
        setSkips(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch skip data.");
        setLoading(false);
      });
  }, []);

  // Advanced: Animate loading with a spinner
  if (loading) {
    return (
      <div
        style={{
          flex: 1,
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            border: "4px solid #e5eaf7",
            borderTop: "4px solid #4687ee",
            borderRadius: "50%",
            width: 44,
            height: 44,
            animation: "spin 1s linear infinite",
          }}
        />
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}</style>
        <span style={{ marginLeft: 18, color: "#6783bb", fontWeight: 500 }}>
          Loading skip options...
        </span>
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          flex: 1,
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <p style={{ color: "red", fontWeight: 600 }}>{error}</p>
        <button
          style={{
            marginTop: 16,
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "10px 24px",
            fontWeight: 600,
            cursor: "pointer",
          }}
          onClick={() => window.location.reload()}
        >
          Retry
        </button>
      </div>
    );
  }

  if (!skips || skips.length === 0) {
    return (
      <div
        style={{
          flex: 1,
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>No skips found.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #f8fbff 0%, #eef2fa 100%)",
        padding: 0,
        margin: 0,
        boxSizing: "border-box",
      }}
    >
      {/* --- PROGRESS BAR --- */}
      <nav
        aria-label="Progress"
        style={{
          maxWidth: 1050,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 0,
          padding: "40px 0 8px 0",
        }}
      >
        <Step
          done
          icon={
            <img
              src={logoIcon}
              alt="Postcode"
              style={{ width: 32, height: 32, borderRadius: 8 }}
            />
          }
          label="Postcode"
        />
        <StepLine />
        <Step
          done
          icon={
            <span
              role="img"
              aria-label="waste"
              style={{ fontSize: 28 }}
            >
              🗑️
            </span>
          }
          label="Waste Type"
        />
        <StepLine />
        <Step
          active
          icon={
            <span
              role="img"
              aria-label="skip"
              style={{ fontSize: 30 }}
            >
              🚚
            </span>
          }
          label="Select Skip"
        />
        <StepLine />
        <Step
          icon={
            <span
              role="img"
              aria-label="permit"
              style={{ fontSize: 30 }}
            >
              📑
            </span>
          }
          label="Permit Check"
        />
        <StepLine />
        <Step
          icon={
            <span
              role="img"
              aria-label="date"
              style={{ fontSize: 30 }}
            >
              📆
            </span>
          }
          label="Choose Date"
        />
        <StepLine />
        <Step
          icon={
            <span
              role="img"
              aria-label="pay"
              style={{ fontSize: 30 }}
            >
              💳
            </span>
          }
          label="Payment"
        />
      </nav>

      {/* --- TITLE --- */}
      <header style={{ textAlign: "center", margin: "10px 0 18px 0" }}>
        <h1
          style={{
            fontSize: "2.7rem",
            fontWeight: 800,
            margin: 0,
            color: "#273763",
            letterSpacing: "-1px",
          }}
        >
          Choose Your Skip Size
        </h1>
        <div
          style={{
            color: "#6783bb",
            fontSize: "1.13rem",
            fontWeight: 500,
            marginBottom: 4,
          }}
        >
          Select the skip size that best suits your needs
        </div>
      </header>

      {/* --- SKIP CARDS --- */}
      <main
        style={{
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
          padding: "38px 14px 44px 14px",
          alignItems: "stretch",
        }}
      >
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            selected={selected === skip.id}
            onSelect={() => setSelected(skip.id)}
          />
        ))}
      </main>

      
    </div>
  );
}