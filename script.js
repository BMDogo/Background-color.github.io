<script>
    let isVisible1 = false;
    let isVisible2 = false;
    let isVisible3 = false;
    
    function showHide1() {
      const d1 = document.getElementById("d1");
      d1.style.display = isVisible1 ? "none" : "block";
      isVisible1 = !isVisible1;
    }
    
    function showHide2() {
      const d2 = document.getElementById("d2");
      d2.style.display = isVisible2 ? "none" : "block";
      isVisible2 = !isVisible2;
    }
    
    function showHide3() {
      const d3 = document.getElementById("d3");
      d3.style.display = isVisible3 ? "none" : "block";
      isVisible3 = !isVisible3;
    }
  </script>
</body>
</html>