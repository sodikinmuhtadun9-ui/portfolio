const button = document.getElementById("connectWallet");

button.onclick = async () => {

if(window.ethereum){

try{

const provider = new ethers.BrowserProvider(window.ethereum);

await provider.send("eth_requestAccounts",[]);

const signer = await provider.getSigner();

const address = await signer.getAddress();

button.innerHTML = address.substring(0,6)+"..."+address.substring(38);

}catch(e){

alert("Connection Failed");

}

}else{

alert("Please Install MetaMask");

}

}