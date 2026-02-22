<?php
  function isValidPhoneNumber($phoneNumber) {
    if (empty($phoneNumber)) {
      // An empty phone number is considered valid in this case
      return true;
    }
    $pattern = '/^\+?[0-9]{1,4}?[-\s\.\(\)]{0,2}([0-9]{1,12})$/'; 
    return preg_match($pattern, $phoneNumber);
  }
?>