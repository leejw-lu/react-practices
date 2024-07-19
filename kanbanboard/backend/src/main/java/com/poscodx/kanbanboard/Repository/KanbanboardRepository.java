package com.poscodx.kanbanboard.Repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.poscodx.kanbanboard.vo.CardVo;
import com.poscodx.kanbanboard.vo.TaskVo;

@Repository
public class KanbanboardRepository {
	@Autowired
	private SqlSession sqlSession;
	
	public List<CardVo> findAll() {
		return sqlSession.selectList("card.findAll");
	}

	public List<TaskVo> findTaskAll(Long cardNo) {
		return sqlSession.selectList("task.findAll", cardNo);
	}

	public void insert(TaskVo vo) {
		sqlSession.insert("task.insert", vo);
	}

	public int updateTask(TaskVo vo) {
		return sqlSession.update("task.update", vo);
	}

	public void delete(Long no) {
		sqlSession.delete("task.delete", no);
	}

}
