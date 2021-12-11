<?php

function view($view, $vars = []) {
  extract($vars);
  include dirname(__FILE__) . "/parts/{$view}.php";
}