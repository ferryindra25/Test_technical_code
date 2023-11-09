<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Coding test</title>
    <script src="/js/jquery-3.7.1.min.js"></script>
    <script src="/dist/js/bootstrap.min.js"></script>

    <link rel="stylesheet" href="/dist/css/bootstrap.min.css">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <script type="text/javascript">
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
    </script>
    <script src="/js/ferry.js"></script>
    <script src="/js/page/view.js"></script>
</head>

<body>
    <div class="container-fluid">
        <h3 class="mb-0">Coding test</h3>
        <hr />
        <div class="row">
            <div class="col-2">
                <input type="number" name="angka" id="angka" class="form-control">
            </div>
        </div>
    </div>
</body>

</html>
