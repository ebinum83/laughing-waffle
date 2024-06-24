import Web3 from "web3";

document.getElementById("connectButton").addEventListener("click", async () => {
  if (window.ethereum) {
    const web3 = new Web3(window.ethereum);
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      const truncatedAccount = `${account.slice(0, 5)}...${account.slice(-5)}`;

      // Hide the connect button and show the user account section
      const connectButton = document.getElementById("connectButton");
      connectButton.style.display = "none";

      const userAccount = document.getElementById("userAccount");
      userAccount.style.display = "flex";
      document.getElementById("account").textContent = truncatedAccount;

      // Fetch and display the balance
      const balanceWei = await web3.eth.getBalance(account);
      const balance = web3.utils.fromWei(balanceWei, "ether");
      document.getElementById("balance").textContent = `${balance} ETH`;
    } catch (error) {
      console.error("Error connecting to MetaMask", error);
    }
  } else {
    alert("No Ethereum wallet found. Please install MetaMask.");
  }
});
