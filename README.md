# 🌟 Fundspire

**Fundspire** is a creator-first platform that helps **content creators** get funded directly by their fans and followers. Whether you're a developer, writer, artist, or educator — Fundspire lets you receive support and build your dream with community contributions. uses next/auth autenticatio via github provider


---

## ✨ Features

- 🔐 Creator Login using NextAuth
- 🧾 Creator Profiles (name, username, Razorpay setup, cover & profile pic)
- ✍ create update profile in database through mongo db via moongoose
- 💸 Receive Payments via Razorpay
- 📅 fetch user and fetch paymenst to show database data dynamically on the page
- 📊 Dashboard for managing profile and payment insights
- 🌍 SEO-ready public profile URLs like `/profile/username`
- 📬 Contact Us page with testimonial carousel
- 💬 Users can submit queries directly
- 🌙 Responsive design 

---

## 🧠 Tech Stack

| Layer        | Tech Used                   |
|--------------|-----------------------------|
| Frontend     | Next.js (App Router), Tailwind CSS |
| Backend      | Node.js, Next.js API Routes |
| Authentication | NextAuth.js               |
| Database     | MongoDB & Mongoose          |
| Payments     | Razorpay API Integration    |

---

## 🔧 Setup Instructions

1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/fundspire.git
cd fundspire
```

2. Install Dependencies

```bash
npm install
```

3. Create a .env.local file

```bash
env

MONGODB_URI=your_mongo_connection_string
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000

NEXT_PUBLIC_KEY_ID=your_razorpay_key
KEY_SECRET=your_razorpay_secret
NEXT_PUBLIC_URL=http://localhost:3000
NEXT_PUBLIC_HOST=http://localhost:3000

```

4. Run the Development Server

```bash
npm run dev
```
🙌 Contribution


Pull requests are welcome! If you have ideas for improving this platform, feel free to fork and submit.


👨‍💻 Author


Made with ❤️ by Vinay Pratap Singh
