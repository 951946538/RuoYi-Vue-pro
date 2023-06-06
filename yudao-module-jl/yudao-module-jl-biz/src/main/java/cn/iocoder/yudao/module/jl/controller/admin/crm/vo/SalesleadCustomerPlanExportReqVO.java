package cn.iocoder.yudao.module.jl.controller.admin.crm.vo;

import lombok.*;
import java.util.*;
import io.swagger.v3.oas.annotations.media.Schema;
import cn.iocoder.yudao.framework.common.pojo.PageParam;
import java.time.LocalDateTime;
import org.springframework.format.annotation.DateTimeFormat;

import static cn.iocoder.yudao.framework.common.util.date.DateUtils.FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND;

@Schema(description = "管理后台 - 销售线索中的客户方案 Excel 导出 Request VO，参数和 SalesleadCustomerPlanPageReqVO 是一致的")
@Data
public class SalesleadCustomerPlanExportReqVO {

    @Schema(description = "创建时间")
    @DateTimeFormat(pattern = FORMAT_YEAR_MONTH_DAY_HOUR_MINUTE_SECOND)
    private LocalDateTime[] createTime;

    @Schema(description = "线索 id", example = "25040")
    private Long salesleadId;

    @Schema(description = "文件地址", example = "https://www.iocoder.cn")
    private String fileUrl;

    @Schema(description = "文件名字", example = "张三")
    private String fileName;

}
