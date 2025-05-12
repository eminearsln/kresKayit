import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [paymentRecords, setPaymentRecords] = useState([]);
  const [classGroups, setClassGroups] = useState([]);
  const [schoolInfo, setSchoolInfo] = useState({
    name: "Özlem Anaokulları",
    address: " Tekerek Mahallesi, Kahramanmaraş / Türkiye",
    contact: "📞 Telefon: 0555 123 45 67      📧 E-posta: bilgi@kresimiz.com",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/admin-login");
    }
  }, [navigate]);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const handleAddPayment = (payment) => {
    setPaymentRecords([...paymentRecords, payment]);
  };

  const handleCreateClassGroup = (newGroup) => {
    setClassGroups([...classGroups, newGroup]);
  };

  const handleSchoolInfoChange = (e) => {
    const { name, value } = e.target;
    setSchoolInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Yönetici Paneli</h2>

      {/* Kreş Genel Bilgiler */}
      <div
        style={{
          marginBottom: "2rem",
          padding: "1rem",
          border: "1px solid #ddd",
        }}
      >
        <h3>Kreş Genel Bilgiler</h3>
        <form>
          <div>
            <label>Okul Adı:</label>
            <input
              type="text"
              name="name"
              value={schoolInfo.name}
              onChange={handleSchoolInfoChange}
              style={{ marginBottom: "1rem", padding: "0.5rem" }}
            />
          </div>
          <div>
            <label>Adres:</label>
            <input
              type="text"
              name="address"
              value={schoolInfo.address}
              onChange={handleSchoolInfoChange}
              style={{ marginBottom: "1rem", padding: "0.5rem" }}
            />
          </div>
          <div>
            <label>İletişim:</label>
            <input
              type="text"
              name="contact"
              value={schoolInfo.contact}
              onChange={handleSchoolInfoChange}
              style={{ marginBottom: "1rem", padding: "0.5rem" }}
            />
          </div>
        </form>
      </div>

      {/* Öğrenciler */}
      <div
        style={{
          marginBottom: "2rem",
          padding: "1rem",
          border: "1px solid #ddd",
        }}
      >
        <h3>Öğrenciler</h3>
        <button
          onClick={() => handleAddStudent({ name: "Yeni Öğrenci", age: 4 })}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Öğrenci Ekle
        </button>
        <ul style={{ marginTop: "1rem" }}>
          {students.map((student, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {student.name}, Yaş: {student.age}
            </li>
          ))}
        </ul>
      </div>

      {/* Ödeme Takibi */}
      <div
        style={{
          marginBottom: "2rem",
          padding: "1rem",
          border: "1px solid #ddd",
        }}
      >
        <h3>Ödeme Takibi</h3>
        <button
          onClick={() =>
            handleAddPayment({
              student: "Öğrenci 1",
              amount: 500,
              month: "Mayıs",
            })
          }
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#2196F3",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Ödeme Ekle
        </button>
        <ul style={{ marginTop: "1rem" }}>
          {paymentRecords.map((payment, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {payment.student}: {payment.amount} TL, Ay: {payment.month}
            </li>
          ))}
        </ul>
      </div>

      {/* Sınıf Grupları */}
      <div
        style={{
          marginBottom: "2rem",
          padding: "1rem",
          border: "1px solid #ddd",
        }}
      >
        <h3>Sınıf Grupları</h3>
        <button
          onClick={() =>
            handleCreateClassGroup({ groupName: "Grup 1", ageRange: "3-4 yaş" })
          }
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#FF9800",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Sınıf Grubu Oluştur
        </button>
        <ul style={{ marginTop: "1rem" }}>
          {classGroups.map((group, index) => (
            <li key={index} style={{ marginBottom: "0.5rem" }}>
              {group.groupName}: {group.ageRange}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
