# 🔐 eVault – Blockchain-Based Evidence Verification System

eVault is a decentralized platform that securely stores and verifies digital evidence (signatures, documents, images) using Ethereum blockchain, IPFS, and Machine Learning. Designed for legal professionals to ensure digital proof integrity.

PRESENTATION : https://youtu.be/hqvCjngK--c?si=_vE-fFXHf0ztFkPN
LIVE DEMO : https://youtu.be/kedkmKf02FU?si=FWdhkbQS1RpSZ23a

## Key Features

- 🛡️ **Blockchain-Verified Storage**: Immutable evidence records on Ethereum
- 🔍 **AI Signature Authentication**: ML-powered forgery detection 
- 🌐 **IPFS Hosting**: Tamper-proof distributed file storage
- 📄 **Smart Evidence Viewer**: Secure document access with hash verification
- 🔐 **End-to-End Encryption**: Military-grade cryptographic protection

## Who It's For

- **Legal Professionals**: Lawyers, judges, and investigators needing evidence authentication
- **Forensic Teams**: Digital evidence verification specialists
- **Government Agencies**: Secure document archiving and retrieval
- **Corporate Compliance**: Contract and agreement validation

---

## Tech Stack

| Component          | Technology                          |
|--------------------|-------------------------------------|
| Blockchain         | Ethereum, Solidity, Hardhat         |
| Frontend           | React.js, Material-UI               |
| Storage            | IPFS (via Pinata)                   |
| Machine Learning   | Python, OpenCV, Scikit-learn        |
| Cryptography       | SHA-256, Digital Signatures         |

---

## Folder Struture 
```
eVault/
├── client/ # Frontend (React)
│ ├── public/ # Static files
│ └── src/ # React source code
├── contracts/ # Solidity smart contracts
│ ├── Upload.sol
│ └── cryptography/ # Cryptographic utilities
├── Features/ # Signature verification logic
│ ├── Testing/ # Test signature samples
│ └── Training/ # Model training data
├── forged/ # Forged signature data
├── real/ # Real signature data
├── TestFeatures/ # Testing ML features
├── scripts/ # Hardhat scripts
├── project.ipynb # Jupyter notebook for ML experiments
├── project.py # Backend logic for ML
├── hardhat.config.js # Hardhat configuration
├── package.json # Node.js dependencies
├── .gitignore
└── README.md
```

## 🚀 How to Run This Project

### Prerequisites
- Node.js v18+
- Python 3.10+
- MetaMask (Browser Extension)
- Git
- Yarn/npm

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/SakshamAngirash/Major-Project.git
   cd eVault
   ```
   
2. **Install frontend dependencies**:
   ```bash
   cd ..
   npm install  # or yarn install
   ```   

3. **Install Python dependencies**:
   ```bash
   pip install -r requirements.txt
   ```     

### Configuration

   ```bash
   # Blockchain
   ETHEREUM_RPC_URL=http://localhost:8545
   PRIVATE_KEY=your_wallet_private_key

   # IPFS
   IPFS_API_KEY=your_pinata_api_key
   IPFS_SECRET_API_KEY=your_pinata_secret

   # ML Server
   ML_API_PORT=5000
   ``` 

### Configuration

   ```bash
   # Blockchain
   ETHEREUM_RPC_URL=http://localhost:8545
   PRIVATE_KEY=your_wallet_private_key

   # IPFS
   IPFS_API_KEY=your_pinata_api_key
   IPFS_SECRET_API_KEY=your_pinata_secret

   # ML Server
   ML_API_PORT=5000
   ```            

### Running the Project

1. **Start local Ethereum node (in separate terminal)**:
   ```bash
    npx hardhat node
   ```
   
2. **Deploy smart contracts (in new terminal)**:
   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```   

   
3. **Launch frontend (in new terminal)**:
   ```bash
   cd client
   npm start
   ```   
  
