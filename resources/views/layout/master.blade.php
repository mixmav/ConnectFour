<!-- Such markup, much wow -->

<!DOCTYPE html>
<html lang="en">
<head>

	@if(config('app.env') == 'production')
		{{-- Analytics --}}
	@endif

	<title>
		@hasSection('title')
	        {{config('app.name')}} - @yield('title')
	    @else
	    	{{config('app.name')}}
		@endif
	</title>

	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="csrf-token" content="{{ csrf_token() }}">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
	<meta name="theme-color" content="{{config('app.theme_color')}}">
	<script src="https://kit.fontawesome.com/0db8c7f53e.js" integrity="sha384-vZhmSm3kshNlxPsZGXVLs2e16t4pRD3QYhU12zwY088qFiim63A4g/VpqBVLxTpz" crossorigin="anonymous"></script>

	<link rel="shortcut icon" href="/images/logos/xhdpi.png?v=lOahIyaGhYt">
	
	@yield('custom-head')
</head>
<body>
	
	<div id="content-container">
		@yield('content')
	</div>
	
	@yield('custom-post-script')
</body>
</html>