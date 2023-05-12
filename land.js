// ��� ��������� �� ������ �������� ���������� ��� ������� ������
function changeColorAndNavigate(buttonId, url) {
  var button = document.getElementById(buttonId);
  button.classList.add('active');
  
  // �������� ���������� ��� ������� ������ � localStorage
  localStorage.setItem('activeButton', buttonId);
  
  // �������� ������� �� ������� �������
  window.location.href = url;
}

// ��� ����������� ������� ����������, �� � ��������� ���������� ��� ������� ������
window.addEventListener('DOMContentLoaded', function() {
  var activeButtonId = localStorage.getItem('activeButton');
  if (activeButtonId) {
    var button = document.getElementById(activeButtonId);
    button.classList.add('active');
  }
});

