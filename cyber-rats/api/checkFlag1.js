// api/checkFlag1.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { flag } = req.body;
      const CORRECT_FLAG = 'CYBERRATS{Resgate_Encriptado_99}';
  
      if (flag === CORRECT_FLAG) {
        res.status(200).json({ success: true, message: 'Flag correta!' });
      } else {
        res.status(200).json({ success: false, message: 'Flag incorreta! Tente novamente.' });
      }
    } else {
      res.status(405).json({ message: 'Método não permitido' });
    }
  }