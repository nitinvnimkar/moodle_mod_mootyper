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
 * @package    mod
 * @subpackage mootyper
 * @copyright  2011 Jaka Luthar (jaka.luthar@gmail.com)
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

global $USER;
global $DB;
require_once(dirname(dirname(dirname(__FILE__))).'/config.php');
require_once(dirname(__FILE__).'/lib.php');
require_once(dirname(__FILE__).'/locallib.php');

$id = optional_param('id', 0, PARAM_INT); // course_module ID, or
$exercise_ID = optional_param('ex', 0, PARAM_INT);

if ($id)
    $course     = $DB->get_record('course', array('id' => $id), '*', MUST_EXIST);
else
    error('You must specify a course_module ID or an instance ID');
if($exercise_ID == 0)
	error('No exercise to edit!');

require_login($course, true);
if(isset($_POST['button']))
   $param1 = $_POST['button']; 
if(isset($param1) && get_string('fconfirm', 'mootyper') == $param1 )
{
	$newText = $_POST['texttotype'];
	$rcrd = $DB->get_record('mootyper_exercises', array('id' => $exercise_ID), '*', MUST_EXIST);
	$updR = new stdClass();
	$updR->id = $rcrd->id;
	//$updR->texttotype = $newText;
	$updR->texttotype = str_replace("\r\n", '\n', $newText);
	$updR->exercisename = $rcrd->exercisename;
	$updR->lesson = $rcrd->lesson;
	$updR->snumber = $rcrd->snumber;
	$DB->update_record('mootyper_exercises', $updR);
	$webDir = $CFG->wwwroot . '/mod/mootyper/exercises.php?id='.$id;
	echo '<script type="text/javascript">window.location="'.$webDir.'";</script>';
}

$PAGE->set_url('/mod/mootyper/eedit.php', array('id' => $course->id, 'ex' => $exercise_ID));
$PAGE->set_title(get_string('etitle', 'mootyper'));
$PAGE->set_heading(get_string('eheading', 'mootyper'));
$PAGE->set_cacheable(false);
echo $OUTPUT->header();
$exerciseToEdit = $DB->get_record('mootyper_exercises', array('id' => $exercise_ID), 'texttotype', MUST_EXIST);
echo '<form method="POST">';
echo '<br>'.get_string('fexercise', 'mootyper').':<br>'.
	 '<textarea name="texttotype">'.$exerciseToEdit->texttotype.'</textarea><br>'.
	 '<br><input name="button" type="submit" value="'.get_string('fconfirm', 'mootyper').'">'.
     '</form>';
echo $OUTPUT->footer();
