import React, { useState, useEffect } from 'react';
import { User, Package, Clock, CheckCircle, MapPin, CreditCard, Banknote, Calendar, LogOut, Eye, Moon, Sun } from 'lucide-react';
import { NavLink } from 'react-router-dom';
const KuryerSistemi = () => {
  const [currentUser, setCurrentUser] = useState('kuryer1');
  const [sifarishler, setSifarishler] = useState([]);
  const [tamamlananSifarishler, setTamamlananSifarishler] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [deliveryData, setDeliveryData] = useState({
    bidonSayi: '',
    mebleg: '',
    odenisNovu: 'nagd'
  });

  const mockSifarishler = [
    {
      id: 1,
      musteri: 'Əli Məmmədov',
      telefon: '+994501234567',
      unvan: 'Nizami rayonu, Həsən bəy Zərdabi 125',
      sifarishMelumat: '5L su - 3 ədəd',
      kuryer: 'kuryer1',
      status: 'təyin edilib',
      tarix: '2025-06-28',
      saat: '14:30'
    },
    {
      id: 2,
      musteri: 'Leyla Həsənova',
      telefon: '+994559876543',
      unvan: 'Yasamal rayonu, Şərifə Əliyeva 89',
      sifarishMelumat: '19L su - 1 ədəd, 5L su - 2 ədəd',
      kuryer: 'kuryer1',
      status: 'başlanıldı',
      tarix: '2025-06-28',
      saat: '15:00'
    },
    {
      id: 3,
      musteri: 'Rəşad Quliyev',
      telefon: '+994703334455',
      unvan: 'Sabunçu rayonu, Bakıxanov 23',
      sifarishMelumat: '19L su - 2 ədəd',
      kuryer: 'kuryer2',
      status: 'təyin edilib',
      tarix: '2025-06-28',
      saat: '16:15'
    }
  ];

  const kuryerler = {
    kuryer1: { ad: 'Orxan Əliyev', telefon: '+994501111111' },
    kuryer2: { ad: 'Tərlan Həsənov', telefon: '+994502222222' }
  };

  useEffect(() => {
    setSifarishler(mockSifarishler);
  }, []);

  const updateOrderStatus = (orderId, newStatus) => {
    setSifarishler(prev => prev.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const completeOrder = () => {
    if (!deliveryData.bidonSayi || !deliveryData.mebleg) {
      alert('Bütün məlumatları doldurun!');
      return;
    }

    const completedOrder = {
      ...selectedOrder,
      status: 'tamamlandı',
      bidonSayi: parseInt(deliveryData.bidonSayi),
      mebleg: parseFloat(deliveryData.mebleg),
      odenisNovu: deliveryData.odenisNovu,
      tamamlanmaTarixi: new Date().toLocaleDateString('az-AZ'),
      tamamlanmaSaati: new Date().toLocaleTimeString('az-AZ', { hour: '2-digit', minute: '2-digit' })
    };

    setTamamlananSifarishler(prev => [...prev, completedOrder]);
    setSifarishler(prev => prev.filter(order => order.id !== selectedOrder.id));

    setSelectedOrder(null);
    setDeliveryData({ bidonSayi: '', mebleg: '', odenisNovu: 'nagd' });

    alert('Sifariş uğurla tamamlandı!');
  };

  const filteredSifarishler = sifarishler.filter(order => order.kuryer === currentUser);
  const filteredTamamlanan = tamamlananSifarishler.filter(order => order.kuryer === currentUser);

  const theme = {
    bg: darkMode ? '#0f172a' : '#f3f4f6',
    cardBg: darkMode ? '#1e293b' : '#ffffff',
    text: darkMode ? '#f1f5f9' : '#1f2937',
    textSecondary: darkMode ? '#94a3b8' : '#6b7280',
    border: darkMode ? '#334155' : '#e5e7eb',
    headerBg: darkMode ? '#1e40af' : '#3b82f6',
    completedBg: darkMode ? '#064e3b' : '#ecfdf5',
    completedBorder: darkMode ? '#065f46' : '#bbf7d0',
    inputBg: darkMode ? '#334155' : '#ffffff',
    inputBorder: darkMode ? '#475569' : '#d1d5db',
    modalOverlay: darkMode ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.3)'
  };

  const getStatusColor = (status) => {
    if (darkMode) {
      return {
        'təyin edilib': { bg: '#1e3a8a', text: '#bfdbfe' },
        'başlanıldı': { bg: '#a16207', text: '#fef3c7' },
        'tamamlandı': { bg: '#065f46', text: '#d1fae5' }
      }[status];
    } else {
      return {
        'təyin edilib': { bg: '#dbeafe', text: '#1e40af' },
        'başlanıldı': { bg: '#fef3c7', text: '#d97706' },
        'tamamlandı': { bg: '#d1fae5', text: '#065f46' }
      }[status];
    }
  };

  return (
    <></>
  );
};

export default KuryerSistemi;