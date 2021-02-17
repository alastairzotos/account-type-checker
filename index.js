/**
 * Checks if an account's balance changes by the same amount month-on-month
 * @returns "B" if true, "A" if false
 * @param {*} accountBalanceHistory 
 */
const checkAccountType = (accountBalanceHistory) => {
    let diff = 0;

    for (let i = 1; i < accountBalanceHistory.length; i++) {
        const change = accountBalanceHistory[i].account.balance.amount
            - accountBalanceHistory[i - 1].account.balance.amount;

        if (i == 1) {
            diff = change;
        } else {
            if (change !== diff) {
                return "A";
            }
        }
    }

    return "B";
};

const accountBalanceHistory = [
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 0 },
        },
    },
    {
        monthNumber: 1, // last month
        account: {
            balance: { amount: 100 },
        },
    },
    {
        monthNumber: 2, // two months ago
        account: {
            balance: { amount: 200 },
        },
    }
];

console.log(checkAccountType(accountBalanceHistory));
