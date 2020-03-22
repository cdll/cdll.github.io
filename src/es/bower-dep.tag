<bower-dep>
  <style>
    :scope{
      background: lightcyan;
    }
    .text-dark{
      color: darkgray;
      margin: 0;
      padding: .5rem;
    }
  </style>

  <section class="text-dark"
    each='{dep in opts.deps}'
    key='{dep}'
  >
    <a class=""
      riot-href='{dep}'
    >
      <big>{dep}</big>
    </a>
  </section>

  <script>
    console.info(opts.deps)
  </script>
</bower-dep>
