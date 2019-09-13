@extends('layout.master')

@section('title')
	Home
@endsection

@section('custom-head')
	<link rel="stylesheet" type="text/css" href="{{mix('/css/app.css')}}">
@endsection

@section('content')
	<div id="app"></div>
@endsection

@section('custom-post-script')
	<script type="text/javascript" src="{{mix('/js/app.js')}}"></script>
@endsection