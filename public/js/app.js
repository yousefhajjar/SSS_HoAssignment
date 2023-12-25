document.getElementById('filter_man_id').addEventListener('change', function () {
    let manId = this.value || this.options[this.selectedIndex].value;
    window.location.href = window.location.href.split("?")[0] + '?manufacturer_id=' + manId

})