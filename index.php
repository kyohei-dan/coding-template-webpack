<?php include ( dirname(__FILE__) . '/init.php' ); ?>
<!DOCTYPE html>
<html lang="ja">
<?php view("head",
['title' => 'ページ | 会社名',
'description' => 'ディスクリプション'
]); ?>

<body>
  <div id="top" class="p_top wrap-all">
    <!--=============== ▼HEADER ===============-->
    <?php view("header"); ?>
    <!--=============== ▼MAIN ===============-->
    <main class="main">
      <section>
      <div class="test-wrap">
        <h2 class="test">test</h2>
      </div>
      </section>
    </main><!-- /.main -->
    <!--=============== ▼FOOTER ===============-->
    <?php view("footer"); ?>
  </div>
  <!--=============== ▼JS ===============-->
  <script src="/dist/js/app.js" defer></script>
  <?php view("polyfill"); ?>
</body>
</html>
