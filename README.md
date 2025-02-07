# MoneyMap

MoneyMap is a modern web application designed to simplify personal finance management through intuitive interfaces, real-time data synchronization, and AI-driven insights. It leverages advanced technologies to provide users with a seamless and secure platform for managing their finances effectively.

## Features

- **User Authentication:** Secure login and registration using Clerk auth.
- **Dashboard:** Real-time display of financial summaries and key metrics using Tanstack Query and Shadcn/UI.
- **Income & Expense Management:** Add, edit, and view income and expenses with efficient data handling via Prisma ORM and PostgreSQL.
- **Data Visualization:** Dynamic and interactive graphs for better data interpretation using Recharts and Matplotlib for static visualization.
- **AI-Powered Suggestions:** Personalized financial advice based on user data analyzed by Google Gemini LLM.
- **Responsive Design:** Optimized for desktop and mobile devices.

## Technologies Used

- **Frontend:**
  - Next.js
  - Shadcn/UI for UI components
  - Recharts for dynamic data visualization
  
- **Backend:**
  - Prisma ORM for database management
  - PostgreSQL as the database
  
- **Data Analysis and Visualization:**
  - Pandas for data manipulation
  - Matplotlib for static data visualization
  - Streamlit for interactive data exploration
  
- **Authentication:**
  - Clerk auth for secure user authentication

- **AI Integration:**
  - Google Gemini LLM for AI-driven financial insights

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BharatHBaddi007.8/MoneyMap.git
   cd MoneyMap
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up PostgreSQL:**
   - Create a PostgreSQL database and update the connection string in the `.env` file:
     ```
     NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-api-key"
     CLERK_SECRET_KEY="your-api-key"

     NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
     NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/setup

     GOOGLE_GEMINI_API = "your api key"

     POSTGRES_PRISMA_URL="PostgreSQL-prisma url"
     POSTGRES_URL_NON_POOLING="PostgreSQL database url(non-pooling)"
     ```

4. **Run migrations:**
   ```bash
   npx prisma migrate dev
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Open the app:**
   - Open your browser and go to `http://localhost:3000`

## Deployment

- MoneyMap can be deployed to platforms like Vercel, AWS, or Heroku. Ensure to set up environment variables and database connections appropriately for production deployment.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by the need for an intuitive and efficient personal finance management tool.
- Special thanks to the developers and contributors of Next.js, Prisma ORM, PostgreSQL, Streamlit, Pandas, Matplotlib, Recharts, Clerk auth, and other open-source technologies used in this project.
=======
   git clone https://github.com/BharatHBaddi0078/Money-Map.git
   cd Money-Map
>>>>>>> 0269dba (Final commit)
