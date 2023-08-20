import Account from '../models/account.js';

export const createAccount = async (req, res) => {
    try {
        const newAccount = new Account(req.body);
        await newAccount.save();
        res.status(201).json(newAccount);
    } catch (error) {
        res.status(500).json({ error: 'Error creating account' });
    }
};

export const getAccountById = async (req, res) => {
    const accountId = (req.params.id).toString();
    try {
        const account = await Account.findById(accountId);
        if (!account) {
            return res.status(404).json({ message: 'Account not found' });
        }
        res.status(200).json(account);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving account' });
    }
};

export const updateAccount = async (req, res) => {
    const accountId = (req.params.id).toString();
    try {
        const updatedAccount = await Account.findByIdAndUpdate(accountId, req.body, { new: true });
        if (!updatedAccount) {
            return res.status(404).json({ message: 'Account not found' });
        }
        res.status(200).json(updatedAccount);
    } catch (error) {
        res.status(500).json({ error: 'Error updating account' });
    }
};

export const deleteAccount = async (req, res) => {
    const accountId = (req.params.id).toString();
    try {
        const deletedAccount = await Account.findByIdAndDelete(accountId);
        if (!deletedAccount) {
            return res.status(404).json({ message: 'Account not found' });
        }
        res.status(200).json({ message: 'Account deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting account' });
    }
};
