package com.poscodx.kanbanboard.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.poscodx.kanbanboard.Repository.KanbanboardRepository;
import com.poscodx.kanbanboard.dto.JsonResult;
import com.poscodx.kanbanboard.vo.TaskVo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class ApiController {
	@Autowired
	private KanbanboardRepository kanbanboardRepository;
	
	@GetMapping("/api/card")
	public ResponseEntity<JsonResult> read() {
		log.info("Request card [GET /api]:");
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(kanbanboardRepository.findAll()));
	}
	
	@GetMapping("/api/task")
	public ResponseEntity<JsonResult> readTask(@RequestParam(value="no") Long cardNo) {
		log.info("Request task [GET /api]:");
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(kanbanboardRepository.findTaskAll(cardNo)));
	}
	
	@PostMapping("/api/task")
	public ResponseEntity<JsonResult> insertTask(@RequestBody TaskVo vo) {
		log.info("Request task [POST /api]:");
		kanbanboardRepository.insert(vo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vo));
	}

	@PutMapping("/api/task")
	public ResponseEntity<JsonResult> updateTask(@RequestBody TaskVo vo) {
		log.info("Request task [Update /api]:");
		System.out.println("TaskVo Update vo" + vo);
		kanbanboardRepository.updateTask(vo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(Map.of("no", vo.getNo(), "done", vo.getDone())));
	}
	
	@DeleteMapping("/api/task/{no}")
	public ResponseEntity<JsonResult> deleteTask(@PathVariable("no") Long no) {
		log.info("Request task [Delete /api]:");
		kanbanboardRepository.delete(no);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(Map.of("no", no)));
	}
}
