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
        state:row?.state,
        address: row?.address,
        phone:row?.phone,

        zip: row?.zip,
        dob: new Date(row?.dob),
    });
    const savedUser = await newUser.save();
    return savedUser?._id;
}

export const savePolicyData =async function(row)
{
    const newPolicy = new Policy({
        policyMode: row?.policy_mode,
        policy_number: row?.policy_number,
        policy_amount_written: row?.premium_amount_written,
        premium_amount: row?.premium_amount,
        policy_type: row?.policy_type,
        producer: row?.producer,
        policy_start_date: new Date(row?.policy_start_date),
        policy_end_date: new Date(row?.policy_end_date),
        
    });
   const savedPolicy =  await newPolicy.save();
   return savedPolicy._id;
   
}
export const saveAgentData =async function(row)
{
    const newAgent = new Agent({
      agent_name: row?.agent,
      userType:row?.userType

    });
   const savedAgent =  await newAgent.save();
   return saveAgentData?._id;
}

export const saveCarrierData = async function(row)
{
  const newCarrier = new Carrier({
     company_name:row?.company_name,
     hasActiveClientPolicy:row?.hasActiveClientPolicy,
     csr: row?.csr
});
const savedCarrier =await newCarrier.save();
return savedCarrier?._id;
}

export const saveLobData = async function(row)
{
    const newLob = new Lob({
       catagory_name:row?.category_name,
       
    });
 const savedLob=   await newLob.save();
 return savedLob?._id
}
export const saveAccountData = async function(row)
{  
    const newAccount = new Account({
        account_name:row?.account_name,
        account_type:row?.account_type,
        account_holder:row?.firstname,
        dob:row?.dob,
        address:row?.address,
        
 
    });
 const savedAccount = await   newAccount.save();
 return savedAccount._id;

}