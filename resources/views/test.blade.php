<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="/js/jquery-3.7.1.min.js"></script>
    <link rel="stylesheet" href="/dist/css/bootstrap.min.css">
    <script src="/dist/js/bootstrap.min.js"></script>
    <title>Pranala Coding Test</title>
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <script type="text/javascript">
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        })
    </script>
</head>

<body>
    <div class="container-fluid mt-3">
        <form id="form-angka">
            <input id="number" type="number" placeholder="input angka" required>
            <div class="mt-2">
                <button type="submit" id="btnGenerateSegitiga">Generate Segitiga</button>
                <button type="submit" id="btnGenerateGanjil">Generate Bilangan Ganjil</button>
                <button type="submit" id="btnGeneratePrima">Generate Bilangan Prima</button>
            </div>
            <h2 class="mt-2">Result :</h2>
            <div id="result">

            </div>
        </form>
    </div>
</body>

<script src="/js/page/test.js">
</script>

</html>
