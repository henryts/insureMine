import Policy from '../models/policy.js';

export const createPolicy = async (req, res) => {
    try {
        const newPolicy = new Policy(req.body);
        await newPolicy.save();
        res.status(201).json(newPolicy);
    } catch (error) {
        res.status(500).json({ error: 'Error creating policy' });
    }
};

export const getPolicyById = async (req, res) => {
    const policyId =  (req.params.id).toString();
    try {
        const policy = await Policy.findById(policyId);
        if (!policy) {
            return res.status(404).json({ message: 'Policy not found' });
        }
        res.status(200).json(policy);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving policy' });
    }
};

export const updatePolicy = async (req, res) => {
    const policyId =  (req.params.id).toString();
    try {
        const updatedPolicy = await Policy.findByIdAndUpdate(policyId, req.body, { new: true });
        if (!updatedPolicy) {
            return res.status(404).json({ message: 'Policy not found' });
        }
        res.status(200).json(updatedPolicy);
    } catch (error) {
        res.status(500).json({ error: 'Error updating policy' });
    }
};

export const deletePolicy = async (req, res) => {
    const policyId = (req.params.id).toString();
    try {
        const deletedPolicy = await Policy.findByIdAndDelete(policyId);
        if (!deletedPolicy) {
            return res.status(404).json({ message: 'Policy not found' });
        }
        res.status(200).json({ message: 'Policy deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting policy' });
    }
};
