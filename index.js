

const opBtn1 = document.querySelectorAll('.opBtn');
const startCalci1 = document.querySelectorAll('.startCalci');
const inDis1 = document.querySelector('#inDis');

let start;
inDis1.placeholder = '';

for (let i = 0; i < opBtn1.length; i++) {
  const btnPress = opBtn1[i];
  btnPress.addEventListener('click', function() {
    if (start) {
      inDis1.placeholder = 'Type or Press Key';
      const saveValue = btnPress.innerHTML;

      if (saveValue === '=') {
        const show = inDis1.value = eval(inDis1.value);
      } else if (saveValue === 'C') {
        inDis1.value = '';
        inDis1.placeholder = 'Type or Press Key';
      }
      else if (saveValue === 'CE') {
        const inputValue = inDis1.value;
        const newValue = inputValue.substring(0, inputValue.length - 1)
        inDis1.value = newValue;
      } else {
        inDis1.value += saveValue;
      }

    }
  })
}

for (const mainBtn of startCalci1) {
  const btnName = mainBtn;
  btnName.addEventListener('click', function() {

    if (btnName.innerHTML === 'ON') {
      // console.log('on');
      start = true;
      inDis1.placeholder = 'Type or Press Key';
    } else {
      // console.log('off');
      inDis1.value = '';
      inDis1.placeholder = '';
      start = false;
    }
    // console.log(start);
  })

}
