'use strict';
import IMask from 'imask';

const phoneMask = IMask(
document.getElementById('phone-mask'), {
  mask: '+{7}(000)000-00-00'
});