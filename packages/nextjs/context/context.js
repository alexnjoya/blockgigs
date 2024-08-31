const Web3 = require('web3');

// Connect to the Ethereum network (local node, Infura, etc.)
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID'); // Replace with your network URL

// Contract ABI and address (replace with actual ABI and contract address)
const contractABI = [
    // Replace this with your actual ABI
];
const contractAddress = '0xYourContractAddressHere'; // Replace with your contract's address

// Create contract instance
const adwumapaContract = new web3.eth.Contract(contractABI, contractAddress);

// Example account that interacts with the contract
const account = '0xYourAccountAddressHere'; // Replace with your account address

// Utility function to send transactions
async function sendTransaction(transaction) {
    try {
        const gas = await web3.eth.estimateGas(transaction);
        const gasPrice = await web3.eth.getGasPrice();

        transaction.gas = gas;
        transaction.gasPrice = gasPrice;

        const signedTx = await web3.eth.accounts.signTransaction(transaction, '0xYourPrivateKeyHere'); // Replace with your private key
        const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

        console.log('Transaction successful:', receipt);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Function to process payment
async function processPayment(recipientAddress, amountInEther) {
    const amountInWei = web3.utils.toWei(amountInEther, 'ether');

    const transaction = {
        from: account,
        to: contractAddress,
        data: adwumapaContract.methods.processPayment(recipientAddress, amountInWei).encodeABI()
    };

    await sendTransaction(transaction);
}

// Function to withdraw funds
async function withdraw(amountInEther) {
    const amountInWei = web3.utils.toWei(amountInEther, 'ether');

    const transaction = {
        from: account,
        to: contractAddress,
        data: adwumapaContract.methods.withdraw(amountInWei).encodeABI()
    };

    await sendTransaction(transaction);
}

// Function for emergency withdrawal
async function emergencyWithdraw(recipientAddress, amountInEther) {
    const amountInWei = web3.utils.toWei(amountInEther, 'ether');

    const transaction = {
        from: account,
        to: contractAddress,
        data: adwumapaContract.methods.emergencyWithdraw(recipientAddress, amountInWei).encodeABI()
    };

    await sendTransaction(transaction);
}

// Function to deposit Ether into the contract
async function deposit(freelancerAddress, amountInEther) {
    const amountInWei = web3.utils.toWei(amountInEther, 'ether');

    const transaction = {
        from: account,
        to: contractAddress,
        value: amountInWei,
        data: adwumapaContract.methods.deposit(freelancerAddress).encodeABI()
    };

    await sendTransaction(transaction);
}

// Function to complete a project and release payment
async function completeProject() {
    const transaction = {
        from: account,
        to: contractAddress,
        data: adwumapaContract.methods.completeProject().encodeABI()
    };

    await sendTransaction(transaction);
}

// Function to release payment when client is satisfied
async function releasePayment(freelancerAddress, amountInEther) {
    const amountInWei = web3.utils.toWei(amountInEther, 'ether');

    const transaction = {
        from: account,
        to: contractAddress,
        data: adwumapaContract.methods.releasePayment(freelancerAddress, amountInWei).encodeABI()
    };

    await sendTransaction(transaction);
}

// Function to complete a milestone and release payment
async function completeMilestone(milestoneIndex) {
    const transaction = {
        from: account,
        to: contractAddress,
        data: adwumapaContract.methods.completeMilestone(milestoneIndex).encodeABI()
    };

    await sendTransaction(transaction);
}

// Function to create a project
async function createProject(amountInEther, title, description, milestones, startDate, endDate, revisionPolicy) {
    const amountInWei = web3.utils.toWei(amountInEther, 'ether');

    const transaction = {
        from: account,
        to: contractAddress,
        value: amountInWei,
        data: adwumapaContract.methods.createProject(amountInWei, title, description, milestones, startDate, endDate, revisionPolicy).encodeABI()
    };

    await sendTransaction(transaction);
}

// Example usage
(async () => {
    try {
        // Deposit 2 Ether for a freelancer
        await deposit('0xFreelancerAddressHere', '2');

        // Release 1 Ether to the freelancer
        await releasePayment('0xFreelancerAddressHere', '1');

        // Complete the first milestone
        await completeMilestone(0);

        // Create a project
        await createProject('5', 'Project Title', 'Project Description', [
            { id: 1, amount: web3.utils.toWei('2', 'ether'), description: 'Milestone 1' },
            { id: 2, amount: web3.utils.toWei('3', 'ether'), description: 'Milestone 2' }
        ], 1622548800, 1625130800, '3 revisions allowed');

        // Complete the project
        await completeProject();

    } catch (error) {
        console.error('An error occurred:', error);
    }
})();
