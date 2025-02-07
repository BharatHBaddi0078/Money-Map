export interface Transaction {
  id: string;
  createdAt: string;
  updatedAt: string;
  amount: number;
  description: string;
  date: string;
  userId: string;
  type: "income" | "expense"; // Define the possible types
  category: string;
  categoryIcon: string;
}

export interface TransactionResponse {
  incomeTransactions: Transaction[];
  expenseTransactions: Transaction[];
}
