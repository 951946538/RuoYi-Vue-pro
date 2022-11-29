package cn.iocoder.yudao.module.bpm.framework.flowable.core.behavior.script.impl;

import cn.iocoder.yudao.module.bpm.enums.definition.BpmTaskRuleScriptEnum;
import org.flowable.engine.delegate.DelegateExecution;
import org.springframework.stereotype.Component;

import java.util.Set;

/**
 * 分配给发起人的一级 Leader 审批的 Script 实现类
 *
 * @author 岳阳医院
 */
@Component
public class BpmTaskAssignLeaderX1Script extends BpmTaskAssignLeaderAbstractScript {

    @Override
    public Set<Long> calculateTaskCandidateUsers(DelegateExecution execution) {
        return calculateTaskCandidateUsers(execution, 1);
    }

    @Override
    public BpmTaskRuleScriptEnum getEnum() {
        return BpmTaskRuleScriptEnum.LEADER_X1;
    }

}
