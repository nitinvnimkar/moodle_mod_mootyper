<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Administration settings definitions for the quiz module.
 *
 * @package    mod
 * @subpackage mootyper
 * @copyright  2012 Jaka Luthar (jaka.luthar@gmail.com)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */


defined('MOODLE_INTERNAL') || die;

if ($ADMIN->fulltree) {
    require_once($CFG->dirroot.'/mod/mootyper/lib.php');
    require_once($CFG->dirroot.'/mod/mootyper/locallib.php');
	$layouts = get_keyboard_layouts_db();
    $settings->add(new admin_setting_configselect('mootyper/defaultlayout', get_string('defaultlayout', 'mootyper'), '', 1, $layouts));
	$precs = array();
	for($i=0; $i<=100; $i++)
	{
		$precs[] = $i;
	}
	$settings->add(new admin_setting_configselect('mootyper/defaultprecision', get_string('defaultprecision', 'mootyper'), '', 97, $precs));
    //$settings->add(new admin_setting_configcheckbox('forum_replytouser', get_string('replytouser', 'forum'),
      //                 get_string('configreplytouser', 'forum'), 1));
    
    //require_once($CFG->dirroot.'/mod/mootyper/exercises.php');  
    
}
