function swap() {
  const from = document.getElementById("fromToken").value;
  const to = document.getElementById("toToken").value;
  const amount = document.getElementById("amount").value;

  if (!amount || amount <= 0) {
    alert("Masukkan jumlah yang valid.");
    return;
  }

  const loading = document.getElementById("loading");
  loading.style.display = "block";

  // Simulasi proses swap (karena belum connect ke kuru.io / smart contract asli)
  setTimeout(() => {
    loading.style.display = "none";
    alert(`Berhasil swap ${amount} ${from} ke ${to} di jaringan Monad Tesnet!`);
  }, 2000);
}
