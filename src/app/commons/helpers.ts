export function calculateTotal(list: Array<any>, key: string) {
  let total = 0;
  list.forEach(item => {
    let amount = parseFloat(item[key]);
    total += amount;
  })

  return total;
}

export function formattedDate() {
  const date = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('es-PE', options);

  return formattedDate;
}

export function formattedHour() {
  const date = new Date();
  const options = { hour: '2-digit', minute:'2-digit' };
  const formattedHour = date.toLocaleTimeString('en-US', options).replace('PM','p.m.').replace('AM','a.m.');

  return formattedHour;
}

export function customFormattedDate() {
  const date = new Date();
  const dateOptions = { year: 'numeric', month: 'long', day: '2-digit' };
  const hourOptions = { hour: '2-digit', minute:'2-digit' };
  const formattedDate = date.toLocaleDateString('es-PE', dateOptions).replace(/de([^de]*)$/,'$1');
  const formattedHour = date.toLocaleTimeString('en-US', hourOptions).replace('PM','p.m.').replace('AM','a.m.');

  return `${formattedDate} a las ${formattedHour}`
}

/**
 * var dateWithoutSecond = new Date();
 * dateWithoutSecond.toLocaleTimeString([], {year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit'});
 */

/**
 * var str = 'a_b_c';
 * console.log(  str.replace(/_([^_]*)$/, '$1')  ) //a_bc
 */

/**
 * var str = 'a_b_c',
 * replacement = '!';
 * console.log(  str.replace(/_([^_]*)$/, replacement + '$1')  ) //a_b!c
 */
