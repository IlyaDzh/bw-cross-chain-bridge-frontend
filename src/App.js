import React from "react";

import {
    Header,
    TransferForm,
    TransactionDetails,
    TransferDialog
} from "@/components";

export const App = () => (
    <div className="container">
        <Header />
        <TransferForm />
        <TransactionDetails />

        <TransferDialog />
    </div>
);
