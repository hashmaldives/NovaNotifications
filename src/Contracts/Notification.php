<?php


namespace Hashtechnologies\NovaNotifications\Contracts;


interface Notification
{
	public static function make(string $title = null, string $subtitle = null);
}