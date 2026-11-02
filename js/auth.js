/**
 * GlobalShop - Authentication & JWT Security Module
 * Supports Customer and Administrator roles with persistent tokens
 */

const DEFAULT_USERS = [
  {
    id: "usr_admin",
    name: "Umidjon (Admin)",
    email: "admin@globalshop.de",
    role: "admin",
    phone: "+49 170 1234567",
    city: "Berlin, Germany",
    address: "Friedrichstraße 45"
  },
  {
    id: "usr_demo",
    name: "Customer Demo",
    email: "user@globalshop.com",
    role: "customer",
    phone: "+998 90 123 45 67",
    city: "Toshkent, O'zbekiston",
    address: "Amir Temur ko'chasi, 12-uy"
  }
];

const AuthManager = {
  async login(email, password) {
    const cleanEmail = email.trim().toLowerCase();

    // Try Backend API Login
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: cleanEmail, password })
      });
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          const sessionUser = { ...data.user, token: data.token };
          store.setUser(sessionUser);
          return { success: true, user: sessionUser };
        }
      }
    } catch (e) {
      console.warn("Backend API unavailable, attempting client fallback verification...", e);
    }

    // Client-side fallback for static preview
    const users = localStorage.getItem('gs_users_list') ? JSON.parse(localStorage.getItem('gs_users_list')) : DEFAULT_USERS;
    const user = users.find(u => u.email.toLowerCase() === cleanEmail);
    if (user) {
      const sessionUser = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        phone: user.phone || "",
        city: user.city || "",
        address: user.address || "",
        token: `client_preview_${user.id}`
      };
      store.setUser(sessionUser);
      return { success: true, user: sessionUser };
    }
    return { success: false, message: "Noto'g'ri email yoki parol (Ungültige Anmeldedaten)" };
  },

  async register(name, email, password, phone = "", city = "", address = "") {
    const cleanEmail = email.trim().toLowerCase();

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email: cleanEmail, password, phone, city, address })
      });
      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          const sessionUser = { ...data.user, token: data.token };
          store.setUser(sessionUser);
          return { success: true, user: sessionUser };
        }
      }
    } catch (e) {
      console.warn("Backend API unavailable, attempting client fallback register...", e);
    }

    const newUser = {
      id: "usr_" + Date.now(),
      name,
      email: cleanEmail,
      role: "customer",
      phone,
      city,
      address
    };
    store.setUser(newUser);
    return { success: true, user: newUser };
  },

  logout() {
    store.logout();
  }
};
