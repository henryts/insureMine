import Policy from '../models/policy.js';
import User  from '../models/user.js';
import Agent from '../models/agent.js';
import Lob from '../models/lob.js';
import Carrier from '../models/carrier.js';
import Account from '../models/account.js';

export const saveUserData = async function(row) {
    const newUser = new User({
        firstname: row?.firstname,
        gender: row?.lastName,
        city: row?.city,
        address: row?.address,
        zip: row?.zip,
        dob: new Date(row?.dob),
    });
    await newUser.save();
}

export const savePolicyData =async function(row)
{
    const newPolicy = new Policy({
        policyMode: row?.policy_mode,
        policy_number: row?.policy_number,
        policy_amount_written: row?.premium_amount_written,
        premium_amount: row?.premium_amount,
        policy_type: row?.policy_type,
        policy_start_date: new Date(row?.policy_start_date),
        policy_end_date: new Date(row?.policy_end_date),
        
    });
    await newPolicy.save();
   
}
export const saveAgentData =async function(row)
{
    const newAgent = new Agent({
      agent_name: row?.agent,
      userType:row?.userType

    });
    await newAgent.save();
}

export const saveCarrierData = async function(row)
{
  const newCarrier = new Carrier({
     company_name:row?.company_name,
     hasActiveClientPolicy:row?.hasActiveClientPolicy,
     csr: row?.csr
});
await newCarrier.save();
}

export const saveLobData = async function(row)
{
    const newLob = new Lob({
       catagory_name:row?.catagory_name,
       
    });
    await newLob.save();
}
export const saveAccountData = async function(row)
{  
    const newAccount = new Account({
        account_name:row?.account_name,
        account_type:row?.account_type
 
    });
    newAccount.save();

}