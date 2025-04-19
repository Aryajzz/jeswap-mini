async function swap() {
  const from = document.getElementById('fromToken').value;
  const to = document.getElementById('toToken').value;
  const amount = document.getElementById('amount').value;
  const status = document.getElementById('status');

  if (from === to) {
    status.innerText = "Token tidak boleh sama!";
    return;
  }

  status.innerText = "Melakukan simulasi swap...";

  try {
    // Di sini kamu bisa sambungkan ke smartcontract asli pakai ether.js
    // Untuk sekarang simulasi dulu
    await new Promise(resolve => setTimeout(resolve, 2000));
    status.innerText = `Sukses! Swap ${amount} ${from} ke ${to}`;
  } catch (e) {
    status.innerText = "Gagal melakukan swap.";
  }
}￼Enter
