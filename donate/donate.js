const copyText = document.getElementById('copyText');

copyText.addEventListener('click', () => {
    navigator.clipboard.writeText(copyText.textContent);
    alert('복사되었습니다.');
  });
