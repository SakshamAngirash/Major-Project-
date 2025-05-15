![image](https://github.com/user-attachments/assets/c4c666c1-f9f2-4ea9-8607-565d179c13c1)# 🔐 eVault – Blockchain-Based Evidence Verification and Storage System

eVault is a decentralized platform designed to securely store and verify digital evidence (like signatures, documents, and images) using Blockchain (Ethereum), IPFS (InterPlanetary File System), and Machine Learning. It aims to support investigators, lawyers, and judges by ensuring the integrity and authenticity of digital proof.

---

## 📌 Features

- 🔗 **Blockchain Integration** (Ethereum + Hardhat): Immutable proof storage using smart contracts.
- 🗃️ **IPFS Decentralized Storage**: Stores files in a tamper-proof, distributed manner.
- 🧠 **AI-Based Signature Verification**: Detects forged vs. genuine signatures using ML.
- 🧪 **Evidence Viewer**: Users can view and share files with hash verification.
- 🛡️ **Cybersecurity Module**: Basic cryptography layer for secure communication.

---

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
| API                | FastAPI (Python)                    |

---

## API Reference

### POST /verify-signature
Analyze digital signatures for authenticity using ML and blockchain verification.

**Endpoint**: `/verify-signature`  
**Method**: `POST`  
**Content-Type**: `application/json`

```json
{
  "image": "base64_encoded_image",
  "user_id": "unique_identifier",
  "metadata": {}
}

